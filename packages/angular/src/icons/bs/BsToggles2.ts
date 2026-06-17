import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-toggles2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsToggles2 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.47 10H12a2 2 0 1 1 0 4H9.47c0.34-0.590.54-1.270.54-2s-0.19-1.41-0.53-2"}],["path",{"d":"M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0.54-10a4 4 0 0 1-0.41-1H4a1 1 0 0 1 0-2h2.13q0.14-0.530.41-1H4a2 2 0 1 0 0 4z"}],["path",{"d":"M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsToggles2;
