import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-hot-surface",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHotSurface {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M106 53.5c45 150-45 150 0 300h60c-45-150 45-150 0-300h-60zm120 0c45 150-45 150 0 300h60c-45-150 45-150 0-300h-60zm120 0c45 150-45 150 0 300h60c-45-150 45-150 0-300h-60zm-270 315c-15 0-30 30-30 30-30 0-30 0-30 30v30h480v-30c0-30 0-30-30-30 0 0-15-30-30-30-30 0-30 45-60 45s-30-45-60-45-30 45-60 45-30-45-60-45-30 45-60 45-30-45-60-45z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHotSurface;
