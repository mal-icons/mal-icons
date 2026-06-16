import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-volcano",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtVolcano {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.49 10h-4.14l-1.49 3.74-0.51 1.26H7.3l-2.22 5h14.27z","opacity":".3"}],["path",{"d":"M18 8h-7l-2 5H6l-4 9h20L18 8zM7.3 15h3.05l0.5-1.26 1.5-3.74h4.14l2.86 10H5.08l2.22-5zM13 1h2v4h-2zm3.12 4.47L18.95 2.64l1.41 1.41-2.83 2.83zM7.64 4.05l1.41-1.41 2.83 2.83-1.41 1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtVolcano;
