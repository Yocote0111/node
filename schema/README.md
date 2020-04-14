# JSON & YAML schema

## JSON
Ref: [https://code.visualstudio.com/docs/languages/json]  
json ファイルで, schema を "$schema" プロパティを指定することでバリデーション可能.  
json-schema など, package.json など, 定型のJSONファイルを書く際に有用.  

```JSON
{
    "$schema": "http://json-schema.org/draft-07/schema",
    "type": "object",
    "properties": {
        // ..
    }
}
```
## * JSON schema list
Ref: [http://schemastore.org/json/]  
json-schema: "http://json-schema.org/draft-07/schema"  
package.json: "http://json.schemastore.org/package"  

## YAML
Ref: [https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml]  
settings.json で "yaml.schemas" プロパティを指定することでバリデーション可能.

```JSON
{
    "yaml.schemas": {
        "http://json.schemastore.org/swagger-2.0": ["*swagger.yaml", "*swagger.yml"],
        "https://raw.githubusercontent.com/docker/compose/master/compose/config/config_schema_v3.8.json": ["*docker-compose.yaml", "*docker-compose.yml"]
    }
}
```
## * yaml schema list

swagger: "http://json.schemastore.org/swagger-2.0"  
docker-compose: "https://raw.githubusercontent.com/docker/compose/master/compose/config/config_schema_v3.8.json"