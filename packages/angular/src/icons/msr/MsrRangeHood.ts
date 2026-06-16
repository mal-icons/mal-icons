import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-range-hood",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrRangeHood {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-160q-24.75 0-42.37-17.62T80-220v-188q0-16 6.5-30.5T104-464l176-176v-200h400v200l182 182q8 8 13 19.28 5 11.28 5 23.72v195q0 24.75-17.62 42.38T820-160H140Zm52-308h576L620-616v-164H340v164L192-468Zm-52 248h680v-188H140v188Zm260-74v-40h160v40H400Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrRangeHood;
