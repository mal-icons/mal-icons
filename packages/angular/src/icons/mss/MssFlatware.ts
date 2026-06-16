import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-flatware",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFlatware {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M200-120v-411q-33 0-56.5-23.5T120-611v-206q0-9 7-16t16-7q9 0 16.5 7t7.5 16v142h40v-142q0-9 7-16t16-7q9 0 16 7t7 16v142h40v-142q0-9 7.5-16t16.5-7q9 0 16 7t7 16v206q0 33-23.5 56.5T260-531v411h-60Zm280 0v-413q-41-23-62-62t-21-90q0-60 30.5-107.5T511-840q53 0 83.5 47.5T625-685q0 51-22 90t-63 62v413h-60Zm214 0v-720q58 5 102 45.5T840-694v244h-86v330h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFlatware;
