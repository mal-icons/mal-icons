import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-sd",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfSd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm-6 6h4c0.55 0 1 0.45 1 1v4c0 0.55-0.45 1-1 1h-4V9zm-3.5 4.5v-1H7c-0.55 0-1-0.45-1-1V10c0-0.550.45-1 1-1h3c0.55 0 1 0.45 1 1v1H9.5v-0.5h-2v1H10c0.55 0 1 0.45 1 1V14c0 0.55-0.45 1-1 1H7c-0.55 0-1-0.45-1-1v-1h1.5v0.5h2zm5 0h2v-3h-2v3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfSd;
