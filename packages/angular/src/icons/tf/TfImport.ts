import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-import",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfImport {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.5 13.68l-4.85-4.83 0.71-0.71 3.65 3.63v-10.8h1v10.8l3.65-3.63 0.71 0.71-4.85 4.83zM16 9.03v6.47c0 0.28-0.22 0.5-0.5 0.5h-14c-0.28 0-0.5-0.22-0.5-0.5v-6.47h-1v6.48c0 0.83 0.67 1.5 1.5 1.5h14c0.83 0 1.5-0.67 1.5-1.5v-6.47h-1z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfImport;
