import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-wall-art",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrWallArt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M141-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h180l139-139q9-9 21-9t21 9l139 139h180q24 0 42 18t18 42v520q0 24-18 42t-42 18H141Zm0-60h680v-520H141v520Zm305-120-80-99q-5-6-12-6t-12 6l-70 95q-5 8-0.75 16t12.75 8h400q9 0 13.5-8t-1.5-16L584-411q-5-6-12-6t-12 6L446-260Zm254.12-190Q721-450 735.5-464.62q14.5-14.62 14.5-35.5Q750-521 735.38-535.5q-14.62-14.5-35.5-14.5Q679-550 664.5-535.38q-14.5 14.62-14.5 35.5Q650-479 664.62-464.5q14.62 14.5 35.5 14.5ZM387-720h188l-94-94-94 94ZM141-140v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrWallArt;
