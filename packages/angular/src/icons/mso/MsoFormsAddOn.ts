import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-forms-add-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoFormsAddOn {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M650-131v-120H530v-60h120v-120h60v120h120v60H710v120h-60ZM120-240v-60h60v60h-60Zm120 0v-60h211v29q0 12 3 31H240ZM120-406v-60h60v60h-60Zm120 0v-60h303q-17.25 12.29-31.12 27.64Q498-423 487-406H240ZM120-573v-60h60v60h-60Zm120 0v-60h520v60H240ZM120-740v-60h60v60h-60Zm120 0v-60h520v60H240Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoFormsAddOn;
