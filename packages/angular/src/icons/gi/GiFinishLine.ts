import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-finish-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFinishLine {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M23 24v464h18V386.9c152.3 29.4 277.6 29.4 430 0V488h18V24h-18v16h-23v32h23v32h-23v32h23v232.6c-153.3 29.9-276.7 29.9-430 0V104h23V72H41V24H23zm41 48h32V40H64v32zm32 0v32h32V72H96zm32 0h32V40h-32v32zm32 0v32h32V72h-32zm32 0h32V40h-32v32zm32 0v32h32V72h-32zm32 0h32V40h-32v32zm32 0v32h32V72h-32zm32 0h32V40h-32v32zm32 0v32h32V72h-32zm32 0h32V40h-32v32zm32 0v32h32V72h-32zm0 32h-32v32h32v-32zm-64 0h-32v32h32v-32zm-64 0h-32v32h32v-32zm-64 0h-32v32h32v-32zm-64 0h-32v32h32v-32zm-64 0H64v32h32v-32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFinishLine;
