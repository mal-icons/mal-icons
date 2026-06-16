import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-scuba-diving",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssScubaDiving {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M144-40 96-76l109-146 46-195q5-21 18-36t35-22l383-117 84-176 112-112 37 37-101 110-67 187-196 137-238 75-61 143L144-40Zm-31-327q-30 0-51.5-21.5T40-440q0-30 21.5-51.5T113-513q30 0 51.5 21.5T186-440q0 30-21.5 51.5T113-367Zm220-166q-20 6-37.5-4.5T272-568q-5-20 4.5-37.5T306-629l183-55 26 97-182 54Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssScubaDiving;
