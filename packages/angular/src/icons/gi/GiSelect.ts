import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-select",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSelect {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M138.56 16.06C83.49 42.97 41.46 86.79 16.12 138.53l59.94 29.41c18.99-38.84 50.47-71.81 91.81-92l-29.31-59.87zm234.840.16L344 76.12c38.85 18.99 71.81 50.47 92 91.81l59.88-29.31c-26.91-55.07-70.73-97.07-122.47-122.41zm62.53 327.72c-18.98 38.87-50.53 71.67-91.87 91.88l29.44 60.13c55.12-26.92 97.09-70.76 122.38-122.56l-59.94-29.44zm-359.940.13l-60 29.38c26.93 55.1 70.78 97.08 122.56 122.38l29.41-59.94C129.12 416.89 96.19 385.4 76 344.06z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSelect;
