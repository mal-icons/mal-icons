import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-ruler-alt-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfRulerAlt2 {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 0.29v16.71h16.71l-16.71-16.71zM1 2.71l2.96 2.96-0.65 0.66 0.71 0.71 0.66-0.65 0.71 0.71-0.65 0.66 0.71 0.71 0.66-0.65 0.71 0.71-0.65 0.66 0.71 0.71 0.66-0.65 0.71 0.71-0.65 0.66 0.71 0.71 0.66-0.65 0.71 0.71-0.65 0.66 0.71 0.71 0.66-0.65 0.71 0.71-0.65 0.66 0.71 0.71 0.66-0.65 2.55 2.55h-13.29v-13.29zM2 15h7.71l-7.71-7.71v7.71zM3 9.71l4.29 4.29h-4.29v-4.29z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfRulerAlt2;
