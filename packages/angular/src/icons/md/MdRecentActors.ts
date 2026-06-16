import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-recent-actors",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdRecentActors {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 5h2v14h-2zm-4 0h2v14h-2zm-3 0H2c-0.55 0-1 0.45-1 1v12c0 0.550.45 1 1 1h12c0.55 0 1-0.45 1-1V6c0-0.55-0.45-1-1-1zm-1 12H3V7h10v10z"}],["circle",{"cx":"8","cy":"9.94","r":"1.95"}],["path",{"d":"M11.89 15.35c0-1.3-2.59-1.95-3.89-1.95s-3.890.65-3.89 1.95V16h7.78v-0.65z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdRecentActors;
