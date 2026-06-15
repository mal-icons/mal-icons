import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-export",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfExport {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.36 5.96l-0.72-0.7 4.86-5 4.86 5.01-0.72 0.7-3.64-3.75v10.77h-1v-10.77l-3.64 3.75zM16 9.03v6.47c0 0.28-0.22 0.5-0.5 0.5h-14c-0.28 0-0.5-0.22-0.5-0.5v-6.47h-1v6.48c0 0.83 0.67 1.5 1.5 1.5h14c0.83 0 1.5-0.67 1.5-1.5v-6.47h-1z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfExport;
