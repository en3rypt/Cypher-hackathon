## Installation

```bash
$ npm install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`COVALENT_API_KEY`

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Backend Problem Statement

[LINK](https://hackmd.io/@IUPUAByGTVS7Mpt2ekvx7A/cyd-backend) to the problem statement.

# CypherD - Backend

## [](https://hackmd.io/@IUPUAByGTVS7Mpt2ekvx7A/cyd-backend#Prerequisites 'Prerequisites')Prerequisites

- Understand Nestjs - a typescript based Backend MVC Framework [Module](https://docs.nestjs.com/modules) , [Controllers](https://docs.nestjs.com/controllers) , [Providers](https://docs.nestjs.com/providers) , [Validations](https://docs.nestjs.com/techniques/validation)
- Understand [local-db](https://lenn.gitbook.io/db-local/) - A simple alternative to database with simple JSON.
- Understand REST Architecture, HTTP Verbs and Response Codes

### [](https://hackmd.io/@IUPUAByGTVS7Mpt2ekvx7A/cyd-backend#Points-to-Consider 'Points-to-Consider')Points to Consider:

- API endpoints must follow REST Architectural Patterns and Guidelines (<https://www.codecademy.com/article/what-is-rest> )
- Variable Names , Function Names, Class Names should be Meaningful.

## [](https://hackmd.io/@IUPUAByGTVS7Mpt2ekvx7A/cyd-backend#Problem-Statement-Create-a-RESTful-API 'Problem-Statement-Create-a-RESTful-API')Problem Statement: Create a RESTful API

### [](https://hackmd.io/@IUPUAByGTVS7Mpt2ekvx7A/cyd-backend#1-An-Endpoint-to-Get-the-aggregate-token-balances-of-an-address-in-the-following-chains-Ethereum-Fantom-and-Polygon '1-An-Endpoint-to-Get-the-aggregate-token-balances-of-an-address-in-the-following-chains-Ethereum-Fantom-and-Polygon')1\. An Endpoint to Get the aggregate token balances of an address in the following chains: Ethereum, Fantom, and Polygon.

- [ ] Integrate with CovalentHq - <https://api.covalenthq.com/v1/1/address/0x52114fb7396dbe19096ffa343d18830f5d77b6c6/balances_v2/?key=><your_api_key>

Sample Input:

```
	 0x52114fb7396dbe19096ffa343d18830f5d77b6c6

```

Sample Output :

```
{
	address: "0x52114fb7396dbe19096ffa343d18830f5d77b6c6",
	balances: {
		eth: [
		{
			name: '',
			symbol:'',
			decimals:'',
			contractAddress:'',
			contractDeicmals:'',
			logo:'',
			balance: xx,
			balanceInUSD: xx,
		}
		],
		polygon:[],
		fantom:[],
	},
	totalBalanceInUSD: XXX
}

```

### [](https://hackmd.io/@IUPUAByGTVS7Mpt2ekvx7A/cyd-backend#2-Watchlist-Management-Feature '2-Watchlist-Management-Feature')2\. Watchlist Management Feature

#### [](https://hackmd.io/@IUPUAByGTVS7Mpt2ekvx7A/cyd-backend#21-An-Endpoint-to-Get-Master-Coin-list---Coingecko-Integration '21-An-Endpoint-to-Get-Master-Coin-list---Coingecko-Integration')2.1 An Endpoint to Get Master Coin list - Coingecko Integration

- [ ] Integrate with following API to generate the master list of tokens <https://api.coingecko.com/api/v3/coins/list>
- [ ] `id` field in the response should be used in upcoming APIs to track these coins through the watchlist

Sample Output:

```
{
	coins:
	[
		{
			"id": "matic-network",
			"symbol": "matic",
			"name": "Polygon"
		},

	]
}

```

#### [](https://hackmd.io/@IUPUAByGTVS7Mpt2ekvx7A/cyd-backend#22-An-Endpoint-to-Create-Watchlist-with-a-name '22-An-Endpoint-to-Create-Watchlist-with-a-name')2.2 An Endpoint to Create Watchlist with a name

Validation : name should be alphanumeric with minimum of 5 characters and maximum of 20\
Sample Input :

```
{
	name: "vitalikWatchlist"
}

```

Sample Output :

```
{
	id: "24cf68e1-3ef1-403b-9851-44a90cb32816",
	name: "vitalikWatchlist",
	tokens: []
}

```

#### [](https://hackmd.io/@IUPUAByGTVS7Mpt2ekvx7A/cyd-backend#23-Add-tokens-to-Watchlist '23-Add-tokens-to-Watchlist')2.3 Add tokens to Watchlist

Validation :\
- `tokensToBeAdded` list should be validated with Coingecko List with the `id` field.\

- should ignore duplicates

Sample Input :

```
{
	tokensToBeAdded: [ "matic-network"]
}

```

Sample Output:

```
{
	id: "24cf68e1-3ef1-403b-9851-44a90cb32816",
	name: "vitalikWatchlist",
	tokens: ["matic-network"]
}

```

#### [](https://hackmd.io/@IUPUAByGTVS7Mpt2ekvx7A/cyd-backend#24-Delete-tokens-from-Watchlist '24-Delete-tokens-from-Watchlist')2.4 Delete tokens from Watchlist

Sample Input

```
{
	tokensToBeDeleted: ["matic-network""]
}

```

Sample Output

```
{
	id: "24cf68e1-3ef1-403b-9851-44a90cb32816",
	name: "vitalikWatchlist",
	tokens: []
}

```

#### [](https://hackmd.io/@IUPUAByGTVS7Mpt2ekvx7A/cyd-backend#25-An-Endpoint-to-Get-Watchlist-by-its-id '25-An-Endpoint-to-Get-Watchlist-by-its-id')2.5 An Endpoint to Get Watchlist by its id

Sample Output

```
{
	id: "24cf68e1-3ef1-403b-9851-44a90cb32816",
	name: "vitalikWatchlist",
	tokens: ["matic-network", "gravity-finance"]
}

```

#### [](https://hackmd.io/@IUPUAByGTVS7Mpt2ekvx7A/cyd-backend#26-An-Endpoint-to-Delete-Watchlist-by-its-id '26-An-Endpoint-to-Delete-Watchlist-by-its-id')2.6 An Endpoint to Delete Watchlist by its id

### [](https://hackmd.io/@IUPUAByGTVS7Mpt2ekvx7A/cyd-backend#References- 'References-')References :

<https://www.coingecko.com/en/api/documentation>

<https://www.covalenthq.com/platform/#/auth/register/> - For Api key generation

<https://www.covalenthq.com/docs/api> - CovalentHQ Docs

<https://www.codecademy.com/article/what-is-rest>

| chain    | id  |
| -------- | --- |
| ethereum | 1   |
| polygon  | 137 |
| fantom   | 250 |

## License

Nest is [MIT licensed](LICENSE).
