import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-pytorch-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevPytorchIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M299.7 0v87.4L165.4 221.6a184.7 184.7 0 0 0 0 258.4l2.2 2.2a185 185 0 0 0 262.8 0 184.7 184.7 0 0 0 2.1-260.6l-2.1-2.2 44.7-44.7a248.5 248.5 0 0 1 0 352.2c-95.5 97.5-252.6 97.5-350.2 0a248.5 248.5 0 0 1-2.9-349.2l3-3zm88 98.9a32.5 32.5 0 1 1 0 65 32.5 32.5 0 0 1 0-65"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevPytorchIcon;
