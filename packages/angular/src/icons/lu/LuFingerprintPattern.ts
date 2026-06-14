import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-fingerprint-pattern",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuFingerprintPattern {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 10a2 2 0 0 0-2 2c0 1.02-0.1 2.51-0.26 4"}],["path",{"d":"M14 13.12c0 2.38 0 6.38-1 8.88"}],["path",{"d":"M17.29 21.02c0.12-0.60.43-2.30.5-3.02"}],["path",{"d":"M2 12a10 10 0 0 1 18-6"}],["path",{"d":"M2 16h0.01"}],["path",{"d":"M21.8 16c0.2-2 0.13-5.35 0-6"}],["path",{"d":"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 0.34-2"}],["path",{"d":"M8.65 22c0.21-0.660.45-1.320.57-2"}],["path",{"d":"M9 6.8a6 6 0 0 1 9 5.2v2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuFingerprintPattern;
