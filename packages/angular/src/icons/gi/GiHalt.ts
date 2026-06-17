import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-halt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHalt {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M389.92 128.73v100.84h-22.8v-158.5a17.11 17.11 0 0 0-17.11-17.11h-11.86a17.11 17.11 0 0 0-17.11 17.11v158.5h-22.7V46.99a17.11 17.11 0 0 0-17.11-17.11h-11.86a17.11 17.11 0 0 0-17.11 17.11v182.57H229.5V77.33a17.11 17.11 0 0 0-17.11-17.11h-11.86a17.11 17.11 0 0 0-17.11 17.11v263.87l-63.86-51.14a23.39 23.39 0 0 0-30.74 1.32l-5.57 5.31a23.39 23.39 0 0 0-2.01 31.68l102.19 125.65a72.03 72.03 0 0 0 57.09 28.1h60.85A134.64 134.64 0 0 0 436 347.5V128.73a17.11 17.11 0 0 0-17.11-17.11h-11.86a17.11 17.11 0 0 0-17.11 17.11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHalt;
