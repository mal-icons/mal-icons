import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-bentoml",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBentoml {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.3 11a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2zm-4.4 0a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2zM5.67 0a1.2 1.2 0 0 0-0.810.32L0.39 4.44A1.2 1.2 0 0 0 0 5.33V22.4A1.6 1.6 0 0 0 1.6 24h17.05a1.2 1.2 0 0 0 0.91-0.42l4.15-4.84a1.2 1.2 0 0 0 0.29-0.78V1.6A1.6 1.6 0 0 0 22.4 0ZM6 0.6h16.2a1.2 1.2 0 0 1 1.2 1.2v15.8a1.6 1.6 0 0 1-1.6 1.6H6A1.2 1.2 0 0 1 4.8 18V1.8A1.2 1.2 0 0 1 6 0.6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBentoml;
