import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-file-text-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFileTextFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 4h6a0.50.5 0 0 1 0 1H5a0.50.5 0 0 1 0-1m-0.5 2.5A0.50.5 0 0 1 5 6h6a0.50.5 0 0 1 0 1H5a0.50.5 0 0 1-0.5-0.5M5 8h6a0.50.5 0 0 1 0 1H5a0.50.5 0 0 1 0-1m0 2h3a0.50.5 0 0 1 0 1H5a0.50.5 0 0 1 0-1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFileTextFill;
