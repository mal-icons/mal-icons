import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-flex-no-wrap",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFlexNoWrap {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-310v-340q0-12.75 8.63-21.37T70-680h180q12.75 0 21.38 8.63T280-650v340q0 12.75-8.62 21.38T250-280H70q-12.75 0-21.37-8.62T40-310Zm320 0v-340q0-12.75 8.63-21.37T390-680h180q12.75 0 21.38 8.63T600-650v340q0 12.75-8.62 21.38T570-280H390q-12.75 0-21.37-8.62T360-310Zm320 0v-340q0-12.75 8.63-21.37T710-680h180q12.75 0 21.38 8.63T920-650v340q0 12.75-8.62 21.38T890-280H710q-12.75 0-21.37-8.62T680-310Zm-580-30h120v-280H100v280Zm640 0h120v-280H740v280Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFlexNoWrap;
