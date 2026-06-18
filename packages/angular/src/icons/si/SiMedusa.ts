import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-medusa",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMedusa {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.33 3.9 14.890.77a5.73 5.73 0 0 0-5.73 0L3.7 3.9C1.95 4.920.84 6.820.84 8.85v6.28c0 2.05 1.1 3.93 2.85 4.95l5.43 3.15a5.73 5.73 0 0 0 5.73 0l5.43-3.15c1.78-1.03 2.85-2.9 2.85-4.95V8.85c0.05-2.03-1.05-3.93-2.83-4.95Zm-8.31 13.68c-3.08 0-5.58-2.5-5.58-5.58 0-3.08 2.5-5.58 5.58-5.58 3.08 0 5.61 2.5 5.61 5.58 0 3.08-2.5 5.58-5.61 5.58z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMedusa;
