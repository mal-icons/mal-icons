import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-usb",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbUsb {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M12 17v-11.5"}],["path",{"d":"M7 10v3l5 3"}],["path",{"d":"M12 14.5l5 -2v-2.5"}],["path",{"d":"M16 10h2v-2h-2l0 2"}],["path",{"d":"M6 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M10 5.5h4l-2 -2.5l-2 2.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbUsb;
