import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Time "mo:core/Time";
import Iter "mo:core/Iter";

actor {
  type ServiceRequired = {
    #bondCleaning;
    #carpetSteamCleaning;
    #ovenKitchenCleaning;
    #bathroomToiletCleaning;
    #windowCleaning;
    #wallSpotCleaning;
    #generalEnquiry;
  };

  module ServiceRequired {
    public func compare(a : ServiceRequired, b : ServiceRequired) : Order.Order {
      if (a == b) {
        return #equal;
      };
      #less; // Impossible case, but needed to satisfy type checker
    };
  };

  type Enquiry = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    address : Text;
    serviceRequired : ServiceRequired;
    message : Text;
    timestamp : Time.Time;
  };

  module Enquiry {
    public func compare(a : Enquiry, b : Enquiry) : Order.Order {
      if (a.id < b.id) { return #less };
      if (a.id > b.id) { return #greater };
      #equal;
    };

    public func compareByTimestamp(a : Enquiry, b : Enquiry) : Order.Order {
      if (a.timestamp < b.timestamp) { return #less };
      if (a.timestamp > b.timestamp) { return #greater };
      #equal;
    };
  };

  var nextId = 1;
  let enquiryMap = Map.empty<Nat, Enquiry>();

  public shared ({ caller }) func submitEnquiry(
    name : Text,
    email : Text,
    phone : Text,
    address : Text,
    serviceRequired : ServiceRequired,
    message : Text,
  ) : async Nat {
    let id = nextId;
    nextId += 1;

    let enquiry : Enquiry = {
      id;
      name;
      email;
      phone;
      address;
      serviceRequired;
      message;
      timestamp = Time.now();
    };

    enquiryMap.add(id, enquiry);
    id;
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiryMap.values().toArray().sort();
  };

  public query ({ caller }) func getEnquiryById(id : Nat) : async Enquiry {
    switch (enquiryMap.get(id)) {
      case (null) { Runtime.trap("Enquiry not found") };
      case (?enquiry) { enquiry };
    };
  };

  public query ({ caller }) func getSubmissionCount() : async Nat {
    enquiryMap.size();
  };

  public query ({ caller }) func getEnquiriesByService(service : ServiceRequired) : async [Enquiry] {
    enquiryMap.values().toArray().filter(
      func(enquiry) { ServiceRequired.compare(enquiry.serviceRequired, service) == #equal }
    );
  };
};
