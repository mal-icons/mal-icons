import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-ecg-heart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoEcgHeart {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-480Zm0 360q-18 0-34.5-6.5T416-146L148-415q-35-35-51.5-80T80-589q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880-590q0 49-17 94t-51 80L543-146q-13 13-29 19.5t-34 6.5Zm40.29-510Q528-630 534-626t11 10l71 106h188.13q7.93-19.43 11.9-39.43Q820-569.43 820-590q0-77-49.95-133.5T645.19-780Q610-780 577.5-765.5 545-751 521-725l-27 29q-3 3-6 5t-8 2q-5 0-8.64-1.88-3.64-1.88-6.36-5.11l-27-29q-24.27-25.82-56.64-40.41Q349-780 314-780q-74.57 0-124.29 56.44Q140-667.12 140-590q0 20.72 4 40.86Q148-529 155.65-510H360q7.58 0 14.39 3.61Q381.21-502.78 385-497l46 70 60-182q3.08-9 11.18-15t18.11-6ZM529-533l-61 182q-2.97 9-11.15 15-8.18 6-17.85 6-8 0-14-4t-10-10l-71-106H198l261 261q5 5 9.8 7 4.8 2 11.2 2 6.4 0 11.2-2 4.8-2 9.8-7l260-261H600q-8 0-14-4t-11-10l-46-69Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoEcgHeart;
