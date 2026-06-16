import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-gif-box",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrGifBox {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M330-400h61q12.33 0 20.66-9Q420-418 420-430v-25q0-6-4.5-10.5T405-470q-6 0-10.5 4.5T390-455v25h-60v-100h73q6 0 10.5-4.5T418-545q0-6-4.5-10.5T403-560h-73q-12.75 0-21.37 8.63T300-530v100q0 12.75 8.63 21.38T330-400Zm150 0q6 0 10.5-4.5T495-415v-130q0-6-4.5-10.5T480-560q-6 0-10.5 4.5T465-545v130q0 6 4.5 10.5T480-400Zm75 0q6 0 10.5-4.5T570-415v-45h55q6 0 10.5-4.5T640-475q0-6-4.5-10.5T625-490h-55v-40h75q6 0 10.5-4.5T660-545q0-6-4.5-10.5T645-560h-90q-6 0-10.5 4.5T540-545v130q0 6 4.5 10.5T555-400ZM180-120q-24 0-42-18t-18-42v-600q0-23 18-41.5t42-18.5h600q23 0 41.5 18.5T840-780v600q0 24-18.5 42T780-120H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrGifBox;
