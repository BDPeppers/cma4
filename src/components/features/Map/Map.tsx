import * as React from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorIcon from '@mui/icons-material/Error';

export interface IMapProps {
}
var text: string;

const AnyReactComponent = () => <div></div>;

export default function Mapo (props: IMapProps) {
  return (
    <div style={{ height: '20vh', width: '100vw' }}>

    </div>
  );
}
var status: string;

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return (
      <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <CircularProgress color="inherit" />
      </Stack>
    );
    case Status.FAILURE:
      return <ErrorIcon />;
    // case Status.SUCCESS:
    //   return (function MyMapComponent({
    //     center,
    //     zoom,
    //   }: {
    //     center: google.maps.LatLngLiteral;
    //     zoom: number;
    //   }) {
    //     const ref = useRef();
      
    //     useEffect(() => {
    //       new window.google.maps.Map(ref.current, {
    //         center,
    //         zoom,
    //       });
    //     });
      
    //     return <div ref={ref} id="map" />;
    //   });
    default:
      return <ErrorIcon />;
  }
};

const Map = () => <Wrapper apiKey={"AIzaSyCsp9_jlm4odj6ub2wxf7iS3RhrDM2pVbM"} render={render} />;