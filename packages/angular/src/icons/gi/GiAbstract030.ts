import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-abstract-030",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAbstract030 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m210.29,21c-95.56,18.49-170.82,93.76-189.29,189.35h163.1c25.32,0 45.64,20.17 45.64,45.5s-20.32,45.8-45.64,45.8h-163.1c18.47,95.59 93.73,170.86 189.29,189.35v-163.15c0-25.33 20.32-45.65 45.64-45.65s45.79,20.32 45.79,45.65v163.15c95.56-18.49 170.82-93.76 189.29-189.35h-162.95c-25.32,0-45.79-20.47-45.79-45.8s20.47-45.5 45.79-45.5h162.95c-18.47-95.59-93.73-170.86-189.29-189.35v162.85c0,25.33-20.47,45.8-45.79,45.8s-45.64-20.47-45.64-45.8v-162.85z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAbstract030;
