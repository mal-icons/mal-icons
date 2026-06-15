import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-disc",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxDisc {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.5 0.88C3.84 0.88 0.88 3.84 0.88 7.5C0.88 11.16 3.84 14.12 7.5 14.12C11.16 14.12 14.12 11.16 14.12 7.5C14.12 3.84 11.16 0.88 7.5 0.88ZM1.83 7.5C1.83 4.37 4.37 1.83 7.5 1.83C10.63 1.83 13.17 4.37 13.17 7.5C13.17 10.63 10.63 13.17 7.5 13.17C4.37 13.17 1.83 10.63 1.83 7.5ZM8.37 7.5C8.37 7.98 7.98 8.37 7.5 8.37C7.02 8.37 6.63 7.98 6.63 7.5C6.63 7.02 7.02 6.63 7.5 6.63C7.98 6.63 8.37 7.02 8.37 7.5ZM9.32 7.5C9.32 8.51 8.51 9.32 7.5 9.32C6.49 9.32 5.68 8.51 5.68 7.5C5.68 6.49 6.49 5.68 7.5 5.68C8.51 5.68 9.32 6.49 9.32 7.5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxDisc;
