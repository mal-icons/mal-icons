import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-plumbing",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfPlumbing {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m19.28 4.93-2.12-2.12c-0.78-0.78-2.05-0.78-2.83 0L11.5 5.64l2.12 2.12 2.12-2.12 3.54 3.54a3.01 3.01 0 0 0 0-4.25zM5.49 13.77c0.590.59 1.540.59 2.12 0l2.47-2.47-2.12-2.13-2.47 2.47c-0.590.59-0.59 1.54 0 2.13z"}],["path",{"d":"m15.04 7.76-0.710.71-0.710.71L10.44 6c-0.59-0.6-1.54-0.6-2.12-0.01a1.49 1.49 0 0 0 0 2.12l3.18 3.18-0.710.71-6.36 6.36c-0.780.78-0.78 2.05 0 2.830.780.78 2.050.78 2.83 0L16.45 12a11 0 1 0 1.41-1.41l-2.82-2.83z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfPlumbing;
