import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-bandaid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBandaid {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.12 1.88a3 3 0 0 0-4.24 0L8.73 3.03l4.26 4.26 1.13-1.16a3 3 0 0 0 0-4.24M12.29 8 8.03 3.73 3.74 8.03 8 12.29zm-5.01 4.99L3.03 8.74 1.88 9.88a3 3 0 0 0 4.24 4.24l0.01-0.01 1.16-1.12ZM2.68 7.68l6.49-6.5a4 4 0 0 1 5.66 5.65l-1.48 1.53-5.01 5.01-1.52 1.47a4 4 0 0 1-5.65-5.66l00 1.51-1.49z"}],["path",{"d":"M5.56 7.65a0.50.5 0 1 1-0.710.710.50.5 0 0 1 0.71-0.71Zm1.42-1.41a0.50.5 0 1 1-0.710.710.50.5 0 0 1 0.71-0.71M8.39 4.82a0.50.5 0 1 1-0.710.710.50.5 0 0 1 0.71-0.71Zm0 5.66a0.50.5 0 1 1-0.710.710.50.5 0 0 1 0.71-0.71ZM9.8 9.06a0.50.5 0 1 1-0.710.710.50.5 0 0 1 0.71-0.71Zm1.41-1.41a0.50.5 0 1 1-0.710.710.50.5 0 0 1 0.71-0.71ZM6.98 9.06a0.50.5 0 1 1-0.710.710.50.5 0 0 1 0.71-0.71ZM8.39 7.65a0.50.5 0 1 1-0.710.710.50.5 0 0 1 0.71-0.71Zm1.41-1.41a0.50.5 0 1 1-0.710.710.50.5 0 0 1 0.71-0.71"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBandaid;
