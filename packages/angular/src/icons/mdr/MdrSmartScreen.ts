import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-smart-screen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSmartScreen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 5H3c-1.1 0-2 0.9-2 2v10c0 1.10.9 2 2 2h18c1.1 0 2-0.9 2-2V7c0-1.1-0.9-2-2-2zm-3 2v10H6V7h12zm-4 5c0-0.41-0.34-0.75-0.75-0.75s-0.750.34-0.750.750.340.750.750.750.75-0.340.75-0.75zm-5 0c0-0.41-0.34-0.75-0.75-0.75s-0.750.34-0.750.750.340.750.750.75S9 12.41 9 12zm7.5 0c0-0.41-0.34-0.75-0.75-0.75s-0.750.34-0.750.750.340.750.750.750.75-0.340.75-0.75zm-5 0c0-0.41-0.34-0.75-0.75-0.75s-0.750.34-0.750.750.340.750.750.750.75-0.340.75-0.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSmartScreen;
