import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-local-bar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLocalBar {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M270-120q-13 0-21.5-8.5T240-150q0-13 8.5-21.5T270-180h180v-244L133-765q-5-6-9-16.5t-4-18.5q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800q0 8-4 18.5t-9 16.5L510-424v244h180q13 0 21.5 8.5T720-150q0 13-8.5 21.5T690-120H270Zm11-575h398l83-81H198l83 81Zm199 216 144-156H336l144 156Zm0 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLocalBar;
