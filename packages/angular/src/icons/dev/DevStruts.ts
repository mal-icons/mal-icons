import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-struts",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevStruts {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-struts-1-a)"}],["path",{"fill":"currentColor","d":"M534 153 305 20 55 160v280l250 140 240-140V148z"}],["path",{"fill":"currentColor","d":"m55 160 250 140 240-140L305 20z"}],["path",{"fill":"currentColor","d":"m545 148-80 42-1 18-159 92v280l240-140z"}],["path",{"fill":"currentColor","d":"M55 160v280l250 140V300z"}],["path",{"fill":"currentColor","d":"M35 440v-90l270 160v90zm0-280v50l270 160v-50z"}],["path",{"fill":"currentColor","d":"M565 440v-50l-219-95-41 25v49l133 59-133 82v90z"}],["path",{"fill":"currentColor","d":"m438 428-16-6-117 68L55 350v-12l-20 12 270 160zM153 180l152-90 160 100 80-42L305 0 35 160l270 160 41-25z"}],["path",{"fill":"currentColor","d":"m464 208 1-18L305 90l-152 90 17 10 135-80z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevStruts;
