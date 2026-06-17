import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-triple-gate",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiTripleGate {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 24L22 216v272h29.03V335.5c0-27.8 27.74-55.5 55.47-55.5 27.7 0 55.5 27.7 55.5 55.5V488h30V312c0-32 32-64 64-64s64 32 64 64v176h30V335.5c0-27.8 27.8-55.5 55.5-55.5s55.5 27.7 55.5 55.5V488h29V216zm-32 55h64v18h-64zm-64 64h192v18H160zm-64 64h320v18H96z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiTripleGate;
