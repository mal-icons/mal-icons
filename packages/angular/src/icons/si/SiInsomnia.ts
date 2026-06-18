import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-insomnia",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiInsomnia {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.14 3.46c4.72 0 8.54 3.82 8.54 8.54 0 4.72-3.82 8.54-8.54 8.54-4.72 0-8.54-3.82-8.54-8.54 0-1.150.23-2.250.64-3.260.60.82 1.58 1.36 2.68 1.36 1.83 0 3.32-1.49 3.32-3.32 0-1.1-0.53-2.07-1.36-2.68 1-0.41 2.1-0.64 3.26-0.64zM12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm0 1.22c5.95 0 10.78 4.83 10.78 10.78S17.95 22.78 12 22.78 1.22 17.95 1.22 12 6.05 1.22 12 1.22Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiInsomnia;
