## Overview

[apiconsole.i14y.admin.ch](https://apiconsole.i14y.admin.ch/) is a centralized hub for documentation and testing of Switzerland's I14Y Interoperability Platform Public and Partner API. It offers two distinct Swagger UIs tailored to different user groups and use cases.

## Available Consoles

### Public Console
**URL:** https://apiconsole.i14y.admin.ch/public/v1/index.html

The Public Console provides read-only access to the I14Y API endpoints. It is designed for:
- External developers and partners needing to query public data
- Testing and exploring API capabilities without authentication
- Integration scenarios requiring simple data retrieval

**Supported Methods:**
- `GET` - Retrieve public data and resources

### Partner Console
**URL:** https://apiconsole.i14y.admin.ch/partner/v1/index.html

The Partner Console offers full access to the I14Y API with comprehensive CRUD (Create, Read, Update, Delete) operations. It is intended for:
- Authorized partners and administrators
- Automating internal processes and workflows
- Data management and synchronization tasks
- Advanced integration scenarios

**Supported Methods:**
- `GET` - Retrieve data
- `POST` - Create new resources
- `PUT` - Update existing resources
- `DELETE` - Remove resources

## Purpose

This application serves as a unified, accessible documentation and testing platform for the I14Y ecosystem. By hosting Swagger UI consoles, it enables:
- Quick API exploration without additional setup
- Interactive endpoint testing with live requests
- Clear, standardized API documentation for all stakeholders
- Separation of concerns between public and partner-level access

## Current Version

- **Version:** v1
- **Status:** Active

## Repository Structure

- `public/v1/` - Public API console assets
- `partner/v1/` - Partner API console assets
- `assets/` - Shared assets and resources
- `src/` - Source code and styling

## Deployment

This site is hosted on GitHub Pages and automatically deployed from this repository.
