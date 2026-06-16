import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-swipe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSwipe {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M880-700H700v-40h133q-75-65-164.5-102.5T480-880q-99 0-188.5 37.5T127-740h133v40H80v-180h40v93q78-62 169-97.5T480-920q100 0 191 35.5T840-787v-93h40v180ZM424-80 184-320l39-57 137 37v-370h60v450l-124-33 153 153h291v-310h60v370H424Zm63-290v-200h60v200h-60Zm126 0v-160h60v160h-60Zm-35 105Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSwipe;
