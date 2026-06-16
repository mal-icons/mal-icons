import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-ecg-heart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssEcgHeart {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M148-415q-35-35-51.5-80T80-589q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880-590q0 49-17 94t-51 80L479-82 148-415Zm166-365q-74.57 0-124.29 56.44Q140-667.12 140-590q0 20.72 4 40.86Q148-529 156-510h219l56 83 69-218h26l91 135h187.21q7.9-19.43 11.84-39.43Q820-569.43 820-590q0-77-49.95-133.5T645.19-780Q610-780 577.5-765.5 545-751 521-725l-30.76 33H469l-31-33q-24.27-25.82-56.64-40.41Q349-780 314-780Zm166 612 281-282H584.87L529-533l-70 217h-25l-91-134H198l282 282Zm0-306Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssEcgHeart;
