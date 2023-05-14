import { Avatar, AvatarImage } from '@/components/ui/avatar';
import React from 'react'


export const SearchResult = () => {
    return (
      <div className="text-sm flex items-start gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://lh3.googleusercontent.com/a/AGNmyxZowgPXMNPmgGUBCTuZfKOHZgF1B1LPwIU5t8Ol=s64-c" />
        </Avatar>
        <div className="flex flex-col">
          <h3 className="leading-4">Bikrant Jung Budhathoki</h3>
          <h4 className="text-xs text-muted-foreground">
            bikrantjung1214@gmail.com
          </h4>
        </div>
      </div>
    );
  };