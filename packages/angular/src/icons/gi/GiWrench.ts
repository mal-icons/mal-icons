import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-wrench",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiWrench {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M151 16c-14.77 0-30 15.23-30 30v105c0 14.77 11.95 26.72 26.72 26.72H181V334.28h-33.28c-14.77 0-26.72 11.95-26.72 26.72v105c0 14.77 15.23 30 30 30h30v-90l75-45 75 45v90h30c14.77 0 30-15.23 30-30v-105c0-14.77-11.95-26.72-26.72-26.72H331V177.72h33.28C379.06 177.72 391 165.77 391 151V46c0-14.77-15.23-30-30-30h-30v90l-75 45-75-45V16h-30z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiWrench;
