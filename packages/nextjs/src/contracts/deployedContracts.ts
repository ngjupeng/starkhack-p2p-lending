/**
 * This file is autogenerated by Scaffold-Stark.
 * You should not edit it manually or your changes might be overwritten.
 */

const deployedContracts = {
  0x534e5f474f45524c49: {
    HelloStarknet: {
      address:
        "0x109fbbfcc8e7f2de2d1b70bb03343d1fc0b2993aabb0de611fa5802d008792b",
      abi: [
        {
          type: "impl",
          name: "HelloStarknetImpl",
          interface_name: "contracts::IHelloStarknet",
        },
        {
          type: "interface",
          name: "contracts::IHelloStarknet",
          items: [
            {
              type: "function",
              name: "increase_balance",
              inputs: [
                {
                  name: "amount",
                  type: "core::felt252",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_balance",
              inputs: [],
              outputs: [
                {
                  type: "core::felt252",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_balance6",
              inputs: [],
              outputs: [
                {
                  type: "core::felt252",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::HelloStarknet::Event",
          kind: "enum",
          variants: [],
        },
      ],
    },
    MyHelloStarknet: {
      address:
        "0x5ce746ca141aaf95e867f84d66e7bf0b773bda83ddee680e174d35f7bd450c5",
      abi: [
        {
          type: "impl",
          name: "HelloStarknetImpl",
          interface_name: "contracts::IHelloStarknet",
        },
        {
          type: "interface",
          name: "contracts::IHelloStarknet",
          items: [
            {
              type: "function",
              name: "increase_balance",
              inputs: [
                {
                  name: "amount",
                  type: "core::felt252",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_balance",
              inputs: [],
              outputs: [
                {
                  type: "core::felt252",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_balance6",
              inputs: [],
              outputs: [
                {
                  type: "core::felt252",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::HelloStarknet::Event",
          kind: "enum",
          variants: [],
        },
      ],
    },
  },
  0x534e5f5345504f4c4941: {
    HelloStarknet: {
      address:
        "0x7fb4b0d804af264c136fcadf2dcb5eed0471bfa22ff9415dee0f9ac72184c06",
      abi: [
        {
          type: "impl",
          name: "HelloStarknetImpl",
          interface_name: "contracts::IHelloStarknet",
        },
        {
          type: "interface",
          name: "contracts::IHelloStarknet",
          items: [
            {
              type: "function",
              name: "increase_balance",
              inputs: [
                {
                  name: "amount",
                  type: "core::felt252",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_balance",
              inputs: [],
              outputs: [
                {
                  type: "core::felt252",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_balance6",
              inputs: [],
              outputs: [
                {
                  type: "core::felt252",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::HelloStarknet::Event",
          kind: "enum",
          variants: [],
        },
      ],
    },
  },
} as const;

export default deployedContracts;
