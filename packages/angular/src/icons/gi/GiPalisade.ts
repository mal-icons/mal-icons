import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-palisade",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiPalisade {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M112 144.84l-9 48V279h18v-86.16l-9-48zm36 0l-9 48V279h18v-86.16l-9-48zm216 0l-9 48V279h18v-86.16l-9-48zm36 0l-9 48V279h18v-86.16l-9-48zm-360 64l-9 48V279h18v-22.16l-9-48zm36 0l-9 48V279h18v-22.16l-9-48zm108 0l-9 48V279h18v-22.16l-9-48zm36 0l-9 48V279h18v-22.16l-9-48zm36 0l-9 48V279h18v-22.16l-9-48zm36 0l-9 48V279h18v-22.16l-9-48zm36 0l-9 48V279h18v-22.16l-9-48zm108 0l-9 48V279h18v-22.16l-9-48zm36 0l-9 48V279h18v-22.16l-9-48zM18 297v16h138.96v-16H18zm156.96 0v16h162.01v-16H174.96zm180.01 0v16H494v-16H354.97zM31 331v156h18V331H31zm36 0v156h18V331H67zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiPalisade;
