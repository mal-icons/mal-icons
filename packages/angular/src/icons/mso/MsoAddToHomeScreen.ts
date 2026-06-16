import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-add-to-home-screen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoAddToHomeScreen {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M300-40q-24.75 0-42.37-17.62T240-100v-146h60v56h440v-580H300v56h-60v-146q0-24.75 17.63-42.37T300-920h440q24.75 0 42.38 17.63T800-860v760q0 24.75-17.62 42.38T740-40H300Zm0-90v30h440v-30H300ZM163-293l-43-43 245-244H200v-60h269v269h-60v-167L163-293Zm137-537h440v-30H300v30Zm0 0v-30 30Zm0 700v30-30Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoAddToHomeScreen;
