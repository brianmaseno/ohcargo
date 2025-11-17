# Azure Maps Integration

This project uses **Azure Maps** for displaying interactive maps with pickup and destination markers.

## 🔑 Authentication

The application uses **Microsoft Entra Authentication** and **Shared Key Authentication** for Azure Maps.

### Credentials Setup:

Store your Azure Maps credentials securely in environment variables (see Configuration section below).

## 📦 Installation

The Azure Maps Control SDK is already installed:

```bash
npm install azure-maps-control
```

## ⚙️ Configuration

The Azure Maps credentials are stored in the `.env` file:

```env
VITE_AZURE_MAPS_CLIENT_ID=your-azure-maps-client-id
VITE_AZURE_MAPS_KEY=your-azure-maps-subscription-key
```

**Important:** Replace the placeholder values with your actual Azure Maps credentials from the Azure Portal.

## 🗺️ Features

The Map component (`src/components/Map.jsx`) provides:

1. **Interactive Map Display**: Full Azure Maps integration with Nairobi, Kenya as default center
2. **Pickup Marker**: Maroon colored marker with "P" label
3. **Destination Marker**: Deep blue colored marker with "D" label
4. **Route Visualization**: Line connecting pickup and destination points
5. **Auto-centering**: Map automatically adjusts to show both markers
6. **Zoom Controls**: Built-in zoom controls for user interaction

## 🎨 Marker Colors

- **Pickup**: Maroon (#800020) - matches your brand color
- **Destination**: Deep Blue (#0a1e3d) - matches your secondary brand color
- **Route Line**: Maroon (#800020) with 80% opacity

## 💻 Usage Example

```jsx
import Map from './components/Map'

function MyComponent() {
  const pickup = { latitude: -1.2921, longitude: 36.8219 }
  const destination = { latitude: -1.3021, longitude: 36.8419 }
  
  return (
    <Map 
      pickup={pickup} 
      destination={destination}
      height="600px" 
    />
  )
}
```

## 🔄 Migration from Google Maps

This project previously used Google Maps but has been migrated to Azure Maps for:
- Better integration with Microsoft services
- Cost-effectiveness
- Enhanced authentication options
- Better support for enterprise applications

## 📚 Resources

- [Azure Maps Documentation](https://docs.microsoft.com/en-us/azure/azure-maps/)
- [Azure Maps Control SDK](https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/)
- [Azure Portal](https://portal.azure.com)

## 🔐 Security Notes

- The subscription keys are currently hardcoded in the Map component as fallbacks
- For production, ensure all keys are loaded from environment variables only
- Consider implementing key rotation using the secondary key
- Monitor usage in Azure Portal to avoid unexpected costs

## 🚀 Development

After making changes to `.env`, restart the development server:

```bash
npm run dev
```

The map will automatically initialize when the component mounts and update when pickup/destination coordinates change.
