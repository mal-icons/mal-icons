import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-tesla",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiTesla {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M136 16v210l45 30v60h60V166l-45-30V76l45-30V16H136zm135 0v30l45 30v60l-45 30v150h60v-60l45-30V16H271zm-13.69 45.03A45 45 0 0 0 211 106a45 45 0 0 0 90 0 45 45 0 0 0-43.69-44.97zM181 346c-30 0-45 15-45 30h240c0-15-15-30-45-30H181zm-75 60c-15 0-30 15-30 30v60h360v-60c0-15-15-30-30-30H106z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiTesla;
