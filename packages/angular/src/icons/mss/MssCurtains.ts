import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-curtains",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCurtains {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-120v-60h80v-660h640v660h80v60H80Zm140-60h168q-8-74-49-148t-119-95v243Zm0-600v244q78-21 118.5-95.5T387-780H220Zm22 300q94 29 146.5 117.5T449-180h62q8-94 60-182.5T717-480q-94-29-146-117.5T511-780h-63q-8 94-60 182.5T242-480Zm498-300H572q8 74 49 148.5T740-536v-244Zm0 600v-244q-78 21-119 95.5T572-180h168ZM220-780v244-244Zm520 0v244-244Zm0 600v-244 244Zm-520 0v-243 243Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCurtains;
