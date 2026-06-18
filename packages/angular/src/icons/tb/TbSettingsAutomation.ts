import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-settings-automation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSettingsAutomation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.33 4.32c0.43 -1.76 2.92 -1.76 3.35 0a1.72 1.72 0 0 0 2.57 1.07c1.54 -0.94 3.31 0.83 2.37 2.37a1.72 1.72 0 0 0 1.07 2.57c1.76 0.43 1.76 2.92 0 3.35a1.72 1.72 0 0 0 -1.07 2.57c0.94 1.54 -0.83 3.31 -2.37 2.37a1.72 1.72 0 0 0 -2.57 1.07c-0.43 1.76 -2.92 1.76 -3.35 0a1.72 1.72 0 0 0 -2.57 -1.07c-1.54 0.94 -3.31 -0.83 -2.37 -2.37a1.72 1.72 0 0 0 -1.06 -2.57c-1.76 -0.43 -1.76 -2.92 0 -3.35a1.72 1.72 0 0 0 1.07 -2.57c-0.94 -1.54 0.83 -3.31 2.37 -2.37c1 0.61 2.3 0.07 2.57 -1.06"}],["path",{"d":"M10 9v6l5 -3l-5 -3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSettingsAutomation;
