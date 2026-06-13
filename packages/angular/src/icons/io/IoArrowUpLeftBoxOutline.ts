import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-arrow-up-left-box-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoArrowUpLeftBoxOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M242.76 123.64L421.46 123.64C432.74 123.64 443.56 128.12 451.54 136.1C459.52 144.08 464 154.9 464 166.18L464 421.46C464 432.74 459.52 443.56 451.54 451.54C443.56 459.52 432.74 464 421.46 464L166.18 464C154.9 464 144.08 459.52 136.1 451.54C128.12 443.56 123.64 432.74 123.64 421.46L123.64 242.76","stroke":"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}],["path",{"d":"M180.36 48L48 48L48 180.36","stroke":"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}],["path",{"d":"M296 296L48 48","stroke":"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoArrowUpLeftBoxOutline;
