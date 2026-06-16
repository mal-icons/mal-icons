import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-cake-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoCakeAdd {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M780-645v-90h-90v-60h90v-90h60v90h90v60h-90v90h-60ZM120-80q-17 0-28.5-11.5T80-120v-219q0-24.75 17.63-42.37T140-399h27v-182q0-24.75 17.63-42.37T227-641h183v-64q-20-14-30.5-30.53T369-775.41q0-14.59 5.5-28.09Q380-817 390-827l50-53 50 53q10 10 16 23.5t6 28.09q0 23.34-11 39.88Q490-719 470-705v64h183q24.75 0 42.38 17.63T713-581v182h27q24.75 0 42.38 17.63T800-339v219q0 17-11.5 28.5T760-80H120Zm107-319h426v-182H227v182Zm-87 259h600v-199H140v199Zm87-259h426-426Zm-87 259h600-600Zm600-259H140h600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoCakeAdd;
