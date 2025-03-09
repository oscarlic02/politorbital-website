import { Box } from '@chakra-ui/react';
import { renderDescription,renderHeading,renderImageBox,renderMembersGrid,getColors } from '../../utils/utils';
/**
 * DivisionDetail component renders a detailed view of a division within the politorbital team.
 * It follows functional programming principles and strictly matches the provided image layout.
 * @author Mohammadreza Hosseinifard, Licciardi Oscar (Modifications)
 * @component
 * @example
 * @todo FIX THE LAYOUT OF THE components
 * return (
 *   <DivisionDetail />
 * )
 *
 * @returns {JSX.Element} A JSX element representing the division detail view.
 */
const DivisionDetail = () => {
  return (
    <Box 
        position="relative"
        width="100%"
        minHeight="80vh"
        paddingY="5vh"
        bg={getColors().primary}
        display="flex"
        flexDirection={["column"]}
        justifyContent="space-around"
        alignItems="center"
    >
    
          {renderHeading()}
          {renderImageBox()}
          {renderDescription()}
          {renderMembersGrid()}
        </Box>
  );
};

export default DivisionDetail;