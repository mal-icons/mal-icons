import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-settings",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FiSettings {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"12","r":"3"}],["path",{"d":"M19.4 15a1.65 1.65 0 0 0 0.33 1.82l0.060.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-0.06-0.06a1.65 1.65 0 0 0-1.82-0.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-0.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.820.33l-0.060.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l0.06-0.06a1.65 1.65 0 0 0 0.33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h0.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-0.33-1.82l-0.06-0.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l0.060.06a1.65 1.65 0 0 0 1.820.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v0.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-0.33l0.06-0.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-0.060.06a1.65 1.65 0 0 0-0.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-0.09a1.65 1.65 0 0 0-1.51 1z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FiSettings;
